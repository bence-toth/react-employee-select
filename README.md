# Employee select component
A possible solution to a Peakon technical assignment.

## The big picture

The repository consists of two applications:
- [a server application](/server/README.md) located in the `/server` folder
- [a client application](/client/README.md) located in the `/client` folder

The server and the client applications were meant to run together.

It probably would have made sense to break down the client application further to an actual application and a component library, but I found that unnecessary for a project of this size.

You can read more about both applications in their respective `README.md` files.

## Assumptions

I made a few assumptions while completing the assignment:

- I assumed that that no authentication towards the server is required – although this is most certainly not true.
- I assumed that the server and the client run on the same domain (hence there are no CORS issues to deal with).
- I assumed that the server would respond to `GET` requests.
- I assumed that `name` and `email` would be available for every employee/manager – although this might not be true.


## Branching strategy

I am following the “commit directly to master” branching strategy.

If any of this was to be released in any way, or if multiple developers were to work on this project, I would probably recommend [Git flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html).

## License

MIT, I guess.

Even though I haven't published it anywhere.