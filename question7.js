// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1


    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      const postsDiv = document.getElementById('posts');
      data.forEach(post => {
        if (post.userId === 1) {
          const postDiv = document.createElement('div');
          postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
          postsDiv.appendChild(postDiv);
        }
      });
    }

    fetchPosts();
 

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil


// see adderad CSS fil


// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId


    async function fetchPostsAndComments() {
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await postsResponse.json();

      const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
      const commentsData = await commentsResponse.json();

      const postsWithCommentsDiv = document.getElementById('postsWithComments');
      postsData.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;

        const postComments = commentsData.filter(comment => comment.postId === post.id);
        if (postComments.length > 0) {
          postComments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comments');
            commentDiv.innerHTML = `<h3>${comment.name}</h3><p>${comment.body}</p>`;
            postDiv.appendChild(commentDiv);
          });
        }

        postsWithCommentsDiv.appendChild(postDiv);
      });
    }

    fetchPostsAndComments();

    



