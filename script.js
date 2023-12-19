let changeIcon = function(icon){
    icon.classList.toggle('fa-times')
}
changeIcon = (icon) => icon.classList.toggle('fa-times')




const counters = document.querySelectorAll('.counter');
  const analyticsSection = document.querySelector('.data-analytics');

  const updateCounter = (counter, targetCount) => {
    const increment = targetCount / 25;
    const currentCount = Number(counter.innerHTML);

    if (currentCount < targetCount) {
      counter.innerHTML = `${Math.round(currentCount + increment)}`;
      setTimeout(() => updateCounter(counter, targetCount), 100);
    } else {
      counter.innerHTML = targetCount;
    }
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          const targetCount = +counter.getAttribute('data-target');
          updateCounter(counter, targetCount);
        });

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this value to control when the counter starts (0.5 means when 50% of the section is visible)
  });

  counters.forEach((counter) => {
    counter.innerHTML = 0;
  });

  observer.observe(analyticsSection);