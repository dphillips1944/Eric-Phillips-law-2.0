// Load external HTML partials AND init hamburger toggles
async function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file} (${res.status})`);
      const text = await res.text();
      el.insertAdjacentHTML('afterbegin', text);
      const toggle = el.querySelector('.nav-toggle');
      const links  = el.querySelector('.nav-links');
      if (toggle && links) {
        toggle.addEventListener('click', () => {
          links.classList.toggle('show');
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
}

document.addEventListener('DOMContentLoaded', includeHTML);