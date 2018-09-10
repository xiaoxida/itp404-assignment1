$("#search").submit(function(event){
  event.preventDefault();

  let html = `<div class="loader">Loading...</div>`

	$('#results').html(html);

  let input = document.getElementById("subreddit").value;

  let url = 'https://www.reddit.com/r/' + input + '.json';

  let promise = $.ajax({
  		type: 'GET',
  		url: url
  	});

  	promise.then(function(members){
  		console.log('success', members);
  		let html = '';
  		members.data.children.forEach(function(member){
  			html +=`
        <div>
          <h3>${member.data.title}</h3>
          <p>${member.data.score}</p>
          <p>${member.data.author}</p>
        </div>
  				`
  		});
  		$('#results').html(html);
  	}, function(error){
  		console.log('error', error);
      let html = 'There are no related subreddits.';
      $('#results').html(html);
  	})
});
