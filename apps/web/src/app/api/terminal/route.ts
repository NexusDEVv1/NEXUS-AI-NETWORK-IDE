import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: Request) {
  try {
    const { command } = await request.json();

    // Whitelist safe commands
    const safeCommands = ['ls', 'pwd', 'echo', 'cat'];
    const isAllowed = safeCommands.some(cmd => command.startsWith(cmd));

    if (!isAllowed) {
      return Response.json(
        { output: 'Command not allowed' },
        { status: 400 }
      );
    }

    const { stdout, stderr } = await execAsync(command, {
      timeout: 5000,
    });

    return Response.json({
      output: stdout || stderr,
    });
  } catch (error: any) {
    return Response.json({
      output: `Error: ${error.message}`,
    });
  }
}
