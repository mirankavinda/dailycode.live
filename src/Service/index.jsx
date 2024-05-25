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
    const downVotes = votes.downvotes?.filter(codetips=>codetips!=id)
    votes.downvotes=downVotes;

    localStorage.setItem('votes',JSON.stringify(votes))
    return true
}

export const downvote = (id) => {
    const votes = localStorage.getItem('votes')?
    JSON.parse(localStorage.getItem('votes'))
    :{
        upvotes:[],
        downvotes:[]
    };

    if(votes.downvotes.indexOf(id) !==-1)
    {
        return false
    }
    votes.downvotes.push(id);
    const upVotes = votes.downvotes?.filter(codetips=>codetips!=id)
    votes.upvotes=upVotes;

    localStorage.setItem('votes',JSON.stringify(votes))
    return true
}

export const checkIsAlreadyUpVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem('votes'));

  return votes?.upvotes?.find(codetips => codetips === id);
}

export const checkIsAlreadyDownVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem('votes'));

  return votes?.downvotes?.find(codetips => codetips === id)
}

// export const checkIsAlreadyUpVoted = (id) => {
//     const votes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : null;
  
//     if (votes) {
//       return votes.upvotes.find(codetips => codetips === id);
//     }
  
//     return false;
//   };

//   export const checkIsAlreadyDownVoted = (id) => {
//     const votes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : null;
  
//     if (votes) {
//       return votes.downvotes.find(codetips => codetips === id);
//     }
  
//     return false;
//   };