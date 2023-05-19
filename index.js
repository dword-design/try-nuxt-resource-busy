import { execaCommand } from 'execa'
import fs from 'fs-extra'
import delay from 'delay'
import kill from 'tree-kill-promise'

await fs.ensureDir('foo')
process.chdir('foo')
await execaCommand('nuxt build')
const nuxt = execaCommand('nuxt start')
await delay(1000)
await kill(nuxt.pid)
process.chdir('..')
await fs.remove('foo')