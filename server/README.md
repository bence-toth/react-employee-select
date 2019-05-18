# “The server”

This is a little mock REST API that works with about a 1000 hard-coded names and responds to network requests with responses that bear a payload which is semantically homomorphic to the one [specified in the gist](https://gist.github.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e). I however cleared away all the clutter, so the server responds with no more data than what is absolutely necessary for [the client application](../client/README.md) to function.

**Disclaimer:** I did not concentrate a lot on this part of the project, hence the not too neatly organized code, no separation of concerns, lack of tests etc.

## API

There are no endpoints. There are no routes either.<br />
The server catches every `GET` request coming its way and responds with:

- `200` and a list of employees, together with some metadata and pageing info.
- `400` or `418` and an error message.

### Parameters

In order to query “the database” and get one page of results, you must supply the following `GET` arguments:
- `q` – the name you are looking for, use `john+doe` format when providing multiple word queries
- `page` – the page number for pagination of suggestions
- `per_page` – the number of items per page for pagination of suggestions

So a request URL could for example look like:
```
http://localhost:3001/?q=jo+a&page=1&per_page=5
```
And it would let’s say generate the following output:
```json
{
  "data": [
    {
      "id": "73",
      "attributes": {
        "name": "Anahi Joseph",
        "avatar": null
      }
    },
    {
      "id": "102",
      "attributes": {
        "name": "Ariel Johnston",
        "avatar": null
      }
    },
    {
      "id": "362",
      "attributes": {
        "name": "Francisco Joseph",
        "avatar": null
      }
    },
    {
      "id": "420",
      "attributes": {
        "name": "Irene Johnson",
        "avatar": null
      }
    },
    {
      "id": "506",
      "attributes": {
        "name": "Joel Castro",
        "avatar": null
      }
    }
  ],
  "included": [
    {
      "id": "73",
      "attributes": {
        "email": "anahi.joseph@peakon.com"
      }
    },
    {
      "id": "102",
      "attributes": {
        "email": "ariel.johnston@peakon.com"
      }
    },
    {
      "id": "362",
      "attributes": {
        "email": "francisco.joseph@peakon.com"
      }
    },
    {
      "id": "420",
      "attributes": {
        "email": "irene.johnson@peakon.com"
      }
    },
    {
      "id": "506",
      "attributes": {
        "email": "joel.castro@peakon.com"
      }
    }
  ],
  "meta": {
    "page": {
      "total": 30
    }
  },
  "links": {
    "next": "http://localhost:3001/?per_page=5&page=2&q=jo"
  }
}
```

In case there are no results, the response payload would look like this:
```json
{
  "data": [],
  "included": [],
  "meta": {
    "page": {
      "total": 0
    }
  },
  "links": {
    "next": "http://localhost:3001/?per_page=5&page=2&q=joasd"
  }
}
```

You will get a `400` if you fail to provide the required `GET` parameters:
```json
{
  "error": "You must provide the following GET parameters: page, page_number, q"
}
```

You can also squeeze out a [nasty 418 error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418) of the server, if you include `err` in the `GET` parameter `q`:
```json
{
  "error": "I’m almost, but not quite, entirely unlike a teapot"
}
```
## Run the server

Start the server:
```bash
node .
```
This will make the server listen closely on port `:3001`.

## Improvement ideas

- Maybe this would deserve an actual npm project, now it’s just 3 JavaScript files lying around.
- Some tests wouldn’t hurt.
- An optional fuzzy search functionality would be killer, so that e,g, Barack Obama would come up to `barobm`.
