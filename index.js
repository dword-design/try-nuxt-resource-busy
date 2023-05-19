import { execaCommand } from 'execa'
import fs from 'fs-extra'
import delay from 'delay'

await fs.ensureDir('foo')
process.chdir('foo')
await execaCommand('nuxt build')
const nuxt = execaCommand('nuxt start')
await delay(1000)
await nuxt.kill()
process.chdir('..')
await fs.remove('foo')