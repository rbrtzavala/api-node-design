import * as user from '../user'

describe('user handler', () => {
    it('should create a new user', async () => {
        const req = {
            body: {
                username: 'Pandi',
                password: 'bark!'
            }
        }
        const res = {
            json({token}) {
                expect(token).toBeTruthy()
            }
        }


        const neUser = await user.createNewUser(req, res, () => {})
    })
})