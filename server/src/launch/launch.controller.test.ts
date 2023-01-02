import { launchName } from '@/launch/launch.controller'

xdescribe('Launch controller', () => {
  it('GET /', async () => {
    await globalThis.request.get(launchName).expect(200)
  })

  describe('POST /', () => {
    it('should return 400 error due to incorrect date', async () => {
      const response = await globalThis.request
        .post(launchName)
        .send({
          mission: 'mission',
          rocket: 'rocket',
          target: 'target',
          launchDate: 'invalid date',
        })
        .expect(400)

      expect(response.body).toEqual({
        error: 'BODY_INCORRECT',
      })
    })

    it('should return 400 error due to some missing field', async () => {
      const body = {
        mission: 'mission',
        rocket: 'rocket',
        target: 'target',
        launchDate: '1',
      }

      const keyToDelete = ['mission', 'rocket', 'target']
      const deleteKey = keyToDelete[Math.floor(Math.random() * 3)]

      delete body[deleteKey]

      const response = await globalThis.request
        .post(launchName)
        .send(body)
        .expect(400)

      expect(response.body).toEqual({
        error: 'BODY_INCORRECT',
      })
    })

    it('should return 201 with created mission', async () => {
      const body = {
        mission: 'mission',
        rocket: 'rocket',
        target: 'target',
        launchDate: '01-01-2020',
      }

      const response = await globalThis.request
        .post(launchName)
        .send(body)
        .expect(201)

      // @ts-expect-error delete anyway
      delete body.target

      expect(response.body).toEqual({
        ...body,
        destination: 'target',
        success: true,
        upcoming: true,
        flightNumber: 1,
        customer: ['NASA'],
      })
    })
  })
})
