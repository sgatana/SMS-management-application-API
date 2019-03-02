## SMS Management Application API

An SMS management system API is a nodeJs application built with a koaJs framework and Postgres Database that allows users to send messages to each other. To use the API, one has to register by providing a name and a valid phone number. 

### Installation

- clone the repo `https://github.com/sgatana/SMS-management-application-API.git`
- cd to the project directory `SMS-management-application-API`
- run `yarn install` or `npm install` to install dependencies
- rename `.env.example` to `.env` and update configurations
- open `postman` to access endpoints `(the app will run on port: 5000)`

## Usage

### contacts endpoints
[View documentation](https://app.swaggerhub.com/apis-docs/eramstech/SMS_API/1.0.0)
##### create a contact

POST: `localhost:5000/api/v1//contacts`

```
sample payload
{
	"name": "andela",
	"phoneNumber": "0711112233"
}
```
Response
```
{
    "message": "contact with phone number 0711112233 created successfully"
}
```
##### Get all contacts 
GET: `localhost:5000/api/v1/contacts`
Response
```
{
    "contacts": [
        {
            "name": "andela",
            "phoneNumber": "0711112233"
        },
        {
            "name": "steve",
            "phoneNumber": "90567843567"
        }
    ]
}
```
##### Get Contact 
GET: `localhost:5000/api/v1/contacts/:contactId`

```
{
    "contact": {
        "id": "-LZz8ReqIMo5-PD1Qt2V",
        "name": "steve",
        "phoneNumber": "90567843567"
    }
}
```
##### Delete contact 
DELETE: `localhost:5000/api/v1/contacts/:phoneNumber`
Reposne
```
{
    "message": "contact with phone number 1234567890 deleted successfully"
}
```
### message endpoints

##### Create/Send sessage

POST: `localhost:5000/api/v1/messages/:contactId/sms`

```
payload:
{
  "message: 'you message'
  "receiverContact: 'recipient phone number'
}
```

Response

```
{
    "message": "message successfully sent"
}
```

##### Get all messages

GET: `localhost:5000/api/v1/messages`

```
sample response:
{
    "messages": [
        {
            "message": "Hello Andela",
            "sender": "steve",
            "receiver": "andela",
            "date": "2019-03-02"
        },
        {
            "message": "Hello Stephen, Houw are you?",
            "sender": "steve",
            "receiver": "steve",
            "date": "2019-03-02"
        }
    ]
}
```

##### Get sent messages

GET: `localhost:5000/api/v1/messages/:contactId/sent`

```
sample response:
{
    "sent messages": [
        {
            "message": "oadky",
            "sentTo": "andela, contact 0711112233",
            "sentOn": "2019-03-02"
        }
    ]
}
```

##### Get received messages

GET: `localhost:5000/api/v1/messages/:contactId/received`

```
sample response:
{
    "received messages": [
        {
            "message": "oadky",
            "sentFrom": "steve, contact 90567843567",
            "receivedOn": "2019-03-02"
        }
    ]
}
```

API endpoints can be found [here](https://app.swaggerhub.com/apis-docs/eramstech/SMS_API/1.0.0)
