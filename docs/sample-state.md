```js
{
    currentUser: {
	id: 1,
	username: "app-academy"
    },
    forms: {
	signUp: { errors: [] },
	logIn: { errors: [] },
	createTrack: { errors: ["lyrics can't be blank"] },
	createAnnotation: { errors: [] },
	createComment: { errors: [] }
    },
    tracks: {
	1: {
	    id: 1,
	    title: "Txoria Txori",
	    artist: "Mikel Laboa",
	    description: "This poem by Joxean Artze has been a classic of Basque music since it was adapted by Mikel Laboa in 1968."
	    lyrics: "Hegoak ebaki banizkio, nerea izango zen...",
n	    userId: 1,
	    language: "Basque"
	}
	
    },
    annotation: {
	    id: 1,
	    trackId: 1,
	    authorId: 1,
	    startIndex: 0,
	    endIndex: 50,
	    body: "If I had clipped her wings, she would still be mine"
	    comments: [
		{
		    id: 1,
		    authorId: 1,
		    annotationId: 1
		    body: "Note the dialectal 'nerea'. (Standard Basque: 'nirea')"
		},
		{
		    id: 2,
		    authorId: 2,
		    annotationId: 1,
		    body: "Basque is the coolest language."
		}
	    ]	
    }
}
```
