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
      tooltip.textContent = `Visit ${iconName}!`;

      // Position tooltip at the bottom of the icon
      tooltip.style.top = `${event.clientY + this.offsetHeight + 5}px`;
      tooltip.style.left = `${event.clientX}px`;

      // Show tooltip
      tooltip.style.display = 'block';
    });

    icon.addEventListener('mouseout', function () {
      // Hide tooltip on mouseout
      tooltip.style.display = 'none';
    });
  });
});
