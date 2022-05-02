async function postData() {
    
    // Default options are marked with *

    const response = await fetch('/reviews', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then(reviewsData => {
      // console.log(reviewsData);
      let container = document.getElementById('sectionSider');

      const reviewsHtml = reviewsData.map((review, index) => {
        return (
            `
            <div class="sectionSider-div ${ index == 0 ? "visible-slide" : "" }">
              <img src= ${review.ReviewerIMG} alt="image">
              <p class="personalReview">
                  ${review.Review} <br>
                  <br> ${review.ReviewerName}
              </p>
            </div>
                
                `
        )
    })
  
    if (container) {
        container.innerHTML += reviewsHtml.toString().replaceAll(",", "");
    }

    });



