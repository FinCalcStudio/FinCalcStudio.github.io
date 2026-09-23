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

The interactive sample is intentionally illustrative. Its displayed result recalculates from the visible sample inputs; it is not a loan quote, regulated disclosure or investment recommendation.
