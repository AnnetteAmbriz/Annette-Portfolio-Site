export default class ServerAPI {
	constructor(host) {
        this.host = host
        this.logging = true
        this.url = this.url.bind(this)
	}

    url = params => `${this.host}${params.url}`

	getJson = params => {
		let headers = this.getHeaders('Accept', params)
		let request = new Request(this.url(params), {method: 'GET', headers: headers})
		if (this.logging) {console.log('Get', params)}
		this.fetchRequest(request, params)
	}

	postJson = params => {
		let headers = this.getHeaders('Content-Type', params)
		if (this.logging) {console.log('Post', params.url, params.data)}
		let body = JSON.stringify(params.data)
		let request = new Request(this.url(params), {method: 'POST', headers: headers, body: body})
		this.fetchRequest(request, params)
	}

	getHeaders = (type, params) => {
		let headers = new Headers()
		let auth = params.auth
		let token = btoa(auth)
		headers.append(type, "application/json")
		headers.append('Access-Control-Allow-Origin', '*')
		return headers
	}

	login = params => {
		let password = prompt('Enter password:')
		if (!password) return
		this.postJson({
			url: '/api/logins',
			auth: password,
			success: params.success,
			failure: params.failure
		})
	}

	fetchRequest = (request, params) => {
        fetch(request)
        .then(response => response.json())
        .then(json => {
            if (this.logging) {console.log('Response', json)}
            params.success(json)
            })
        }
    }