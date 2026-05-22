document.getElementById('year').textContent = new Date().getFullYear();

// ---- Sticky header: shadow + compact state on scroll ----
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

const setNavOpen = (open) => {
  primaryNav.classList.toggle('is-open', open);
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
};

navToggle.addEventListener('click', () => {
  setNavOpen(!primaryNav.classList.contains('is-open'));
});
primaryNav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => setNavOpen(false))
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setNavOpen(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 820) setNavOpen(false);
});

// ---- Staggered scroll reveal ----
const targets = document.querySelectorAll('[data-reveal], .demands li, .standards li, .stat, .footer-col');
targets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.setProperty('--reveal-delay', (i % 5) * 60 + 'ms');
});
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ---- Expand arrow toggles (news + timeline) ----
const setExpandToggleState = (button, collapsed, labels) => {
  button.setAttribute('aria-expanded', String(!collapsed));
  button.setAttribute('aria-label', collapsed ? labels.collapsed : labels.expanded);
};

const newsFeed = document.getElementById('newsFeed');
const newsFeedToggle = document.getElementById('newsFeedToggle');
if (newsFeed && newsFeedToggle) {
  const newsLabels = {
    collapsed: 'Show earlier updates',
    expanded: 'Hide earlier updates',
  };
  newsFeedToggle.addEventListener('click', () => {
    const collapsed = newsFeed.classList.toggle('news-feed--collapsed');
    setExpandToggleState(newsFeedToggle, collapsed, newsLabels);
  });
}

const timelineList = document.getElementById('timelineList');
const timelineToggle = document.getElementById('timelineToggle');
if (timelineList && timelineToggle) {
  const timelineLabels = {
    collapsed: 'Show earlier days in the log',
    expanded: 'Hide earlier days in the log',
  };
  timelineToggle.addEventListener('click', () => {
    const collapsed = timelineList.classList.toggle('timeline-list--collapsed');
    setExpandToggleState(timelineToggle, collapsed, timelineLabels);
    if (!collapsed) {
      timelineList.querySelectorAll('.timeline-item-older.reveal:not(.is-visible)').forEach((el) => {
        io.observe(el);
      });
    }
  });
}
