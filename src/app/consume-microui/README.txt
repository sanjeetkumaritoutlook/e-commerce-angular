Required Changes
Use FormGroup to manage the form state in the parent (ConsumeMicrouiComponent).
Detect unsaved changes and show a modal before navigating away.
Use the Angular CanDeactivate guard to prevent navigation if changes are unsaved.
Modify the opportunity-header Web Component usage in the consuming app.


Final Features Implemented
✅ Uses Reactive Forms to sync with the micro UI Web Component.
✅ Detects Unsaved Changes via valueChanges.
✅ Shows a Modal before navigation if changes are unsaved.
✅ Implements CanDeactivate Guard to prevent accidental exits.


 How This Works
When the user tries to navigate away, canExitGuard checks for unsavedChanges.
If unsavedChanges === true, a confirmation dialog appears.
If the user confirms, navigation proceeds. Otherwise, they stay on the same page.

Why This Works
✅ userData is now properly defined as an object with form fields.
✅ Prevents errors when binding formData in HTML.
✅ Ensures unsaved changes detection works correctly.