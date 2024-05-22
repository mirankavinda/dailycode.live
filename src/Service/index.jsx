export const upvote = (id) => {
    const votes = localStorage.getItem('votes')?
    JSON.parse(localStorage.getItem('votes'))
    :{
        upvotes:[],
        downvotes:[]
    };

    if(votes.upvotes.indexOf(id) !==-1)
    {
        return false
    }
    votes.upvotes.push(id);
    const downVotes = votes.downvotes.filter(codetips=>codetips!=id)
    votes.downvotes=downVotes;

    localStorage.setItem('votes',JSON.stringify(votes))
    return true
}