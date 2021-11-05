/* BURGER MENU TOGGLE */

$(".burger").on("click", function() {
  $(this).children().first().toggleClass("open");
  $("#mob-menu").toggleClass("active");
  $("body").toggleClass("no-scroll");
});

/* POST FILTER */

function filterSelection(c) {
  var x;
  x = document.getElementsByClassName("post");
  if (c == "all") c = "";
  // Add the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
  for (let i = 0; i < x.length; i++) {
  // let classlist = [];
  // for (j = 0; j < x[i].classList.length; j++) {
  //   classlist.push(x[i].classList[j]);
  // }
  // if (classlist.includes(c) {
  //   x[i].classList.add('show');
  // }

  RemoveClass(x[i], "current-page");
  if (x[i].className.indexOf(c) > -1) AddClass(x[i], "current-page");
  }
  paginate();
}

// Show filtered elements
function AddClass(element, name) {
  const classlist = element.className.split(" ");
  const names = name.split(" ");
  for (let i = 0; i < names.length; i++) {
  if (classlist.indexOf(names[i]) == -1) {
      element.className += " " + names[i];
  }
  }
}

// Hide elements that are not selected
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

// Add active class to the current button (highlight it)
var filterForm = document.getElementById("filters");
if (filterForm) {
  filterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const filters = document.getElementsByClassName('filter');

  for (let i = 0; i < filterForm.length - 1; i++) {
      filterSelection(filters[i].value);
  }
  });
};


/* POST PAGINATION */

const postContainer = document.getElementsByClassName('posts-container')[0];
const nextPageBtn = document.getElementById('next');
const prevPageBtn = document.getElementById('prev');
const posts = postContainer.children;
const numOfPosts = posts.length;
const limit = 3;
const numOfPages = Math.ceil(numOfPosts/limit);
let currentPage = 1;
let postArr = [];

for (let i=0; i < posts.length; i++) {
  postArr.push(posts[i]);
}

function paginate() {
  for (let i=0; i < posts.length; i++) {
  if (i > limit - 1) {
      posts[i].classList.remove('show');
  };
  };

  buildPage(currentPage)
};

function buildPage(currPage) {
  const trimStart = (currPage-1)*limit;
  const trimEnd = trimStart + limit;
  document.getElementById('page-num').innerHTML = currPage;
  document.getElementById('total-pages').innerHTML = numOfPages;
  postArr.forEach(el => {
  el.classList.remove('current-page');
  });
  postArr.slice(trimStart, trimEnd).forEach(el => {
  el.classList.add('current-page');
  });
  return postArr.slice(trimStart, trimEnd);
};

function nextPage() {
  if (currentPage < numOfPages) {
  currentPage++;
  buildPage(currentPage);
  }
};

function prevPage() {
  if (currentPage > 1) {
  currentPage--;
  buildPage(currentPage);
  }
};

nextPageBtn.addEventListener('click', nextPage);
prevPageBtn.addEventListener('click', prevPage);
filterSelection("all");