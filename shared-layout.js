// Shared Layout Components for Wings of Discovery
// This file provides reusable header and footer components

const SharedLayout = {
  // Back header with navigation and branding
  getBackHeader() {
    return `
    <div class="back-header">
      <a href="index.html" class="back-button">← Back to Home</a>
      <div class="wings-branding">
        <img
          src="images/WingsOfDiscovery-Logo.png"
          alt="Wings of Discovery"
          class="wings-logo"
        />
        The Wings of Discovery
      </div>
    </div>
    `;
  },

  // Footer with copyright info
  getFooter() {
    return `
    <div class="footer">
      <p>
        © 2025 The Wings of Discovery. Created by
        <strong>The Quantum Crystals</strong>. All rights reserved.
      </p>
    </div>
    `;
  },

  // Inject back header at the beginning of body
  injectBackHeader() {
    const header = this.getBackHeader();
    const body = document.body;
    body.insertAdjacentHTML("afterbegin", header);
  },

  // Inject footer at the end of body
  injectFooter() {
    const footer = this.getFooter();
    const body = document.body;
    body.insertAdjacentHTML("beforeend", footer);
  },

  // Initialize both header and footer
  init() {
    this.injectBackHeader();
    this.injectFooter();
  },
};

// Auto-initialize when DOM is loaded if not already present
document.addEventListener("DOMContentLoaded", function () {
  // Check if back-header already exists
  if (!document.querySelector(".back-header")) {
    SharedLayout.injectBackHeader();
  }

  // Check if footer already exists
  if (!document.querySelector(".footer")) {
    SharedLayout.injectFooter();
  }
});
