async function postData() {
    
    // Default options are marked with *

    const data = await fetch('/MembersData', {

      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return data.json(); // parses JSON response into native JavaScript objects
  }
  
  postData()
    .then( membersData => {
      let container = document.getElementById('memberBox');
        console.log(membersData);
      const MembersHtml = membersData.map((member) => {
        return (
            `
            <div class=profileBox>
                <img src = ${member.Img} alt="member image">
                <p class="details">
                    <span class="name">${member.Name}</span>
                    <span class="designation">${member.Designation}</span>
                </p>
                <p class="cadetName">${member.CadetName}</p>
            </div>
            `
        )
    })
  
    if (container) {
        container.innerHTML += MembersHtml.toString().replaceAll(",", "");
    }

    });