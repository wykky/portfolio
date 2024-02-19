  // get some new update
document.addEventListener('DOMContentLoaded', function () {
  // Get all icon elements
  const icons = document.querySelectorAll('.icons a');

  // Create and append tooltip element
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  document.body.appendChild(tooltip);

  // Icon names mapping
  const iconNames = {
    githubIcon: 'GitHub',
    projectsIcon: 'Projects',
    resumeIcon: 'Résumé',
    blogIcon: 'Blog'
  };

  // Add event listeners for each icon
  icons.forEach(icon => {
    icon.addEventListener('mouseover', function (event) {
      // Get the name from the mapping
      const iconName = iconNames[this.id];

      // Set tooltip content
      tooltip.textContent = `${iconName}!`;

      // Position tooltip at the bottom and slightly to the right of the icon
      tooltip.style.top = `${event.clientY + this.offsetHeight}px`;
      tooltip.style.left = `${event.clientX + this.offsetWidth / 4}px`;

      // Show tooltip with a transition
      tooltip.style.display = 'block';
      tooltip.style.opacity = '1';
    });

    icon.addEventListener('mouseout', function () {
      // Hide tooltip on mouseout with a transition
      tooltip.style.opacity = '0';
      setTimeout(() => {
        tooltip.style.display = 'none';
      }, 300); // Adjust the transition duration in milliseconds
    });
  });
});
