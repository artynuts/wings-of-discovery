// Shared Layout Components for Wings of Discovery
// This file provides reusable header and footer components

const SharedLayout = {
  // QC Logo component with Quantum Crystals branding
  getQCLogo(size = "40px") {
    return `
      <div style="
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        flex-shrink: 0;
        background: linear-gradient(135deg, #8a3edb 0%, #4b1f69 50%);
        padding: 10px 15px;
        border-radius: 15px;
        backdrop-filter: blur(100px);
        border: 1px solid rgba(138, 62, 219, 0.4);
      ">
        <img
          src="images/QC-Logo/Transparent/Transparent-04.png"
          alt="The Quantum Crystals Logo"
          style="height: ${size}; width: auto"
        />
        <div class="logo">
          <div class="logo-container">
            <div class="logo-block">
              <div class="logo-the">THE</div>
              <div class="logo-quantum">QUANTUM</div>
              <div class="logo-crystals">CRYSTALS</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Back header with navigation and branding
  getBackHeader() {
    return `
    <div class="back-header">
      <a href="index.html" class="back-button">← Back Home</a>
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
  // Inject QC logo if container exists
  const qcContainer = document.getElementById("qc-logo-container");
  if (qcContainer) {
    qcContainer.innerHTML = SharedLayout.getQCLogo("40px");
  }

  // Check if back-header already exists
  if (!document.querySelector(".back-header")) {
    SharedLayout.injectBackHeader();
  }

  // Check if footer already exists
  if (!document.querySelector(".footer")) {
    SharedLayout.injectFooter();
  }
});
