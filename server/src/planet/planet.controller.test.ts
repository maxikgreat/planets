import { planetName } from '@/planet/planet.controller'

describe('Planet controller', () => {
  it('GET /', async () => {
    const response = await globalThis.request.get(planetName).expect(200)

    expect(response.body).toBeTruthy()
  })
})
