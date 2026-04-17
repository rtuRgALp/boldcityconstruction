const ALLOWED_ORIGINS = [
	'https://boldcityconstruction.com',
	'https://www.boldcityconstruction.com',
	'https://rturgalp.github.io',
];

const TO_EMAIL = 'luisvar7119@gmail.com';

function corsHeaders(origin) {
	const headers = {
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
	};
	if (ALLOWED_ORIGINS.includes(origin)) {
		headers['Access-Control-Allow-Origin'] = origin;
	}
	return headers;
}

export default {
	async fetch(request, env) {
		const origin = request.headers.get('Origin') || '';

		if (request.method === 'OPTIONS') {
			return new Response(null, { status: 204, headers: corsHeaders(origin) });
		}

		if (request.method !== 'POST') {
			return new Response('Method not allowed', { status: 405 });
		}

		try {
			const { name, phone, email, service, message } = await request.json();

			if (!name || !phone || !message) {
				return new Response(
					JSON.stringify({ error: 'Name, phone, and message are required.' }),
					{ status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } }
				);
			}

			const htmlBody = `
				<h2>New Estimate Request</h2>
				<p><strong>Name:</strong> ${escapeHtml(name)}</p>
				<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
				<p><strong>Email:</strong> ${escapeHtml(email || 'Not provided')}</p>
				<p><strong>Service:</strong> ${escapeHtml(service || 'Not specified')}</p>
				<h3>Project Details</h3>
				<p>${escapeHtml(message)}</p>
			`;

			const res = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${env.RESEND_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					from: 'Bold City Contact Form <onboarding@resend.dev>',
					to: [TO_EMAIL],
					subject: `New Estimate Request from ${name}`,
					html: htmlBody,
					reply_to: email || undefined,
				}),
			});

			if (!res.ok) {
				const err = await res.text();
				console.error('Resend error:', err);
				return new Response(
					JSON.stringify({ error: 'Failed to send email. Please call us at (904) 553-8871.' }),
					{ status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } }
				);
			}

			return new Response(
				JSON.stringify({ success: true }),
				{ status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } }
			);
		} catch (err) {
			console.error('Worker error:', err);
			return new Response(
				JSON.stringify({ error: 'Something went wrong. Please call us at (904) 553-8871.' }),
				{ status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } }
			);
		}
	},
};

function escapeHtml(str) {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}
