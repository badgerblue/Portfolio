document.addEventListener('DOMContentLoaded', function () {
  const viewDetailsButtons = document.querySelectorAll('.view-details-button');
  const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
  const modalImage = document.getElementById('projectModalImage');
  const modalDescription = document.getElementById('projectModalDescription');

  // Sample project details
  const projects = [
    {
      title: 'Garf',
      image: 'project1.jpg',
      description: 'Garf',
    },
    {
      title: 'Garf',
      image: 'project2.jpg',
      description: 'Garf',
    },
    {
      title: 'Garf',
      image: 'project3.jpg',
      description: 'Garf',
    },
    // Add more projects as needed
  ];

  viewDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      modalImage.src = projects[index].image;
      modalDescription.textContent = projects[index].description;
      projectModal.show();
    });
  });
});
