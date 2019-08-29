const routes = {
  '/': home,
  '/about': about
};

const rootDiv = document.getElementById('content');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
function openModal(index) {
  let modal = document.getElementById(`myModal_${index}`);
  let span = document.getElementsByClassName('close')[index];
  modal.style.display = 'block';
  span.onclick = function() {
    modal.style.display = 'none';
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
