import dotenv from 'dotenv'
import path from 'path'
import * as tsConfigPaths from 'tsconfig-paths'
import * as tsConfig from '../tsconfig.json'

dotenv.config()

if (process.env.NODE_ENV === 'production') {
  const baseUrl = path.join(__dirname, '..')

  tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths,
  })
}
