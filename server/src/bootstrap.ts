import path from 'path'
import * as tsConfigPaths from 'tsconfig-paths'
import * as tsConfig from '../tsconfig.json'

if (process.env.NODE_ENV === 'production') {
  const baseUrl = path.join(__dirname, '..')

  tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths,
  })
}
