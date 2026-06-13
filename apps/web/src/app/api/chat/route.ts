import { AIRouter } from '@nexus/ai-router';

const router = new AIRouter(process.env.OPENROUTER_API_KEY || '');
let initialized = false;

export async function POST(request: Request) {
  try {
    if (!initialized) {
      await router.initialize();
      initialized = true;
    }

    const { messages } = await request.json();

    const response = await router.chat({
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    });

    return Response.json({
      content: response.content,
      model: response.model,
      tokens: response.tokens,
    });
  } catch (error: any) {
    console.error('Chat error:', error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
