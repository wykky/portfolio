document.addEventListener('DOMContentLoaded', function () {
  // Get all icon elements
  const icons = document.querySelectorAll('.icons a');

// Icon names mapping
    const iconNames = {
      githubIcon: 'GitHub',
      projectsIcon: 'Projects',
      resumeIcon: 'Résumé',
      blogIcon: 'Blog'
    };
  
  // Create and append tooltip element
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  document.body.appendChild(tooltip);

  // Add event listeners for each icon
  icons.forEach(icon => {
    icon.addEventListener('mouseover', function (event) {
      // Set tooltip content
      tooltip.textContent = `${this.id}!`;

      // Position tooltip
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;

      // Show tooltip
      tooltip.style.display = 'block';
    });

    icon.addEventListener('mouseout', function () {
      // Hide tooltip on mouseout
      tooltip.style.display = 'none';
    });
  });
});

