# FinCalc website

This is a standalone, dependency-light product site for the FinCalc iPhone + iPad app prototype. It intentionally does not use the Sites capability or a framework.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8765 --directory website
```

Then open <http://127.0.0.1:8765/>.

## Files

- `index.html` — semantic page structure, content and accessible controls.
- `styles.css` — responsive visual system, motion, focus states and reduced-motion rules.
- `script.js` — English / Deutsch / Français copy switching, demo tabs, live sample math, formula disclosure, mobile navigation and reveal motion.
- `assets/scenario-studio.png` — the existing FinCalc iPad Scenario Studio preview used in the workspace section.
- `support.html` — the App Store support center with FAQs, purchase restoration, language, local-data, and export guidance.
- `support/index.html` — the `/support/` entry point, which forwards to `support.html` for hosts that serve directory indexes.
- `privacy.html` — the privacy policy covering local storage, StoreKit transactions, exports, and deletion.

The interactive sample is intentionally illustrative. Its displayed result recalculates from the visible sample inputs; it is not a loan quote, regulated disclosure or investment recommendation.

## Publishing the support page

Copy the whole `website/` directory to the GitHub Pages repository so that the
support page and its linked assets are published together. The recommended App
Store Connect Support URL is:

```text
https://fincalcstudio.github.io/support.html
```

The page's support-request button points to the repository's GitHub Issues page.
Before submitting an app update, the repository owner must enable Issues (or
replace that link with a real support email or form) and verify that an
anonymous visitor can open a support request. GitHub currently reports issue
creation as restricted for this repository.

Set the App Store Connect Privacy Policy URL to:

```text
https://fincalcstudio.github.io/privacy.html
```
