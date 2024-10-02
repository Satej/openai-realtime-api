import { RealtimeClient } from '@openai/realtime-api-beta';

const client = new RealtimeClient({ apiKey: process.env.OPENAI_API_KEY });

client.updateSession({ instructions: 'You are a great, upbeat friend.'});
client.updateSession({ voice: 'alloy' });
client.updateSession({
    turn_detection: { type: 'none' },
    input_audio_transcription: { model: 'whisper-1' },
});

client.on('conversation.updated', event => {
    const { item, delta } = event;
    const items = client.conversation.getItems();
});

await client.connect();

client.sendUserMessageConnect([{ type: 'input_text', text: 'How are you?' }]);