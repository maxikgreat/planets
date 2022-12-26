import 'tsconfig-paths/register'

export default async () => {
  await globalThis.server.close()
}
