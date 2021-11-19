/* BURGER MENU TOGGLE */

$(".burger").on("click", function() {
  $(this).children().first().toggleClass("open");
  $("#mob-menu").toggleClass("active");
  $("body").toggleClass("no-scroll");
});


/* POST FILTER */

if (document.getElementById('has-posts')) {
  const postContainer = document.getElementsByClassName('posts-container')[0];
  const allEntries = document.getElementsByClassName('post');
  let filteredEntries;

  // filter functions

  function filterSelection(c) {
    var x;
    x = document.getElementsByClassName("post");
    if (c == "all") c = "";

    // Add the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
    for (let i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      for (let j = 0; j < c.length; j++) {
        if (x[i].className.indexOf(c[j]) > -1) AddClass(x[i], "show");
      }
    }

    filteredEntries = document.getElementsByClassName('show');
    removePosts();
    addPosts();
    paginate();
  }

  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
    }
    element.className = arr1.join(" ");
  }

  function AddClass(element, name) {
    const classlist = element.className.split(" ");
    const names = name.split(" ");
    for (let i = 0; i < names.length; i++) {
    if (classlist.indexOf(names[i]) == -1) {
        element.className += " " + names[i];
    }
    }
  }

  const removePosts = () => {
    for (let i = allEntries.length - 1; i >= 0; i--) {
      allEntries[i].classList.add('hidden');
    }
  }

  const addPosts = () => {
    for (let i = filteredEntries.length - 1; i >= 0; i--) {
      filteredEntries[i].classList.remove('hidden');
    }
  }


  // pagination functions

  const posts = postContainer.children;
  const nextPageBtn = document.getElementById('next');
  const prevPageBtn = document.getElementById('prev');
  const numOfPosts = posts.length;
  const limit = parseInt($('.posts-container').attr('data-has-posts'));
  let numOfPages = Math.ceil(numOfPosts/limit);
  let currentPage = 1;
  let postArr = [];

  for (let i=0; i < posts.length; i++) {
    postArr.push(posts[i]);
  }

  function paginate() {
    buildPage(currentPage);
  };
    
  function buildPage(currPage) {
    if (nextPageBtn) {
      prevPageBtn.classList.remove('hidden');
      nextPageBtn.classList.remove('hidden');
      if (currPage === 1) {
        prevPageBtn.classList.add('hidden');
        if (numOfPages === 1) {
          nextPageBtn.classList.add('hidden');
        }
      } else if (currPage === numOfPages) {
        nextPageBtn.classList.add('hidden');
      }
    }


    if (document.getElementById('page-num')) {
      document.getElementById('page-num').innerHTML = currPage;
    }
    const trimStart = (currPage-1)*limit;
    const trimEnd = trimStart + limit;
    let postArr2 = [];
    for (let i=0; i < postArr.length; i++) {
      let classlist = [];
      for (let j=0; j < postArr[i].classList.length; j++) {
        classlist.push(postArr[i].classList[j]);
      };
      if (!classlist.includes('hidden')) {
        postArr2.push(postArr[i]);
      }
    }

    postArr.forEach(el => {
      el.classList.remove('current-page');
    });

    postArr2.slice(trimStart, trimEnd).forEach(el => {
      el.classList.add('current-page');
    });

    numOfPages = Math.ceil(postArr2.length/limit);
    if (document.getElementById('total-pages')) {
      document.getElementById('total-pages').innerHTML = numOfPages;
    }
  };

  function nextPage() {
    if (currentPage < numOfPages) {
      nextPageBtn.style.display = 'block';
      currentPage++;
      buildPage(currentPage);
    };
  };

  function prevPage() {
    if (currentPage > 1) {
    currentPage--;
    buildPage(currentPage);
    }
  };

  if (nextPageBtn) {
    nextPageBtn.addEventListener('click', nextPage);
  }
  if (prevPageBtn) {
    prevPageBtn.addEventListener('click', prevPage);
  }

  // filter on form submit
  const filterForm = document.getElementById("filters");
  if (filterForm) {
      // filters posts and adds 'show' class
      filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const filters = document.getElementsByClassName('filter');
        let filterArr = [];
        for (let i = 0; i < filterForm.length - 1; i++) {
          filterArr.push(filters[i].value);
          filterSelection([filters[i].value]);
        };
    });
  };

  // filter on button click
  const filterButtons = document.getElementsByClassName('filter-btn');
  if (filterButtons) {
    for (let i=0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener('click', () => {
        for (let i=0; i < filterButtons.length; i++) {
          filterButtons[i].classList.remove('active');
        };
        filterButtons[i].classList.add('active');
        filterSelection([filterButtons[i].id]);
      })
    };
  };
  paginate();
}


/* IMAGE GALLERY */

const mainGalleryImg = document.getElementById('main-img');
const subGalleryImgs = document.getElementsByClassName('sub-img');

const initMainImg = (src) => {
  mainGalleryImg.src = src;
};

if (mainGalleryImg) {
  initMainImg(subGalleryImgs[0].src);

  for (let i=0; i < subGalleryImgs.length; i++) {
    subGalleryImgs[i].addEventListener('click', () => {
      initMainImg(subGalleryImgs[i].src);
    });
  };
};


/* FORM SUBMIT */

const enquiryForm = document.getElementById('enquiry-form');
const rideSelects = document.getElementsByClassName('ride-select');
const rideSelect = document.getElementById('main-ride-select');

if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let rides = [];
    for (let i=0; i < rideSelects.length; i++) {
      rides.push(rideSelects[i].value);
    }
    rideSelect.value = rides.toString();
    enquiryForm.submit();
  });
}