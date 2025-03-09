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

 Now, when you try to navigate away:
If there are unsaved changes, a modal will automatically pop up.
If you click "OK", it will navigate away.
If you click "Cancel", it will stay on the current page.
This ensures a seamless user experience without an explicit button.

 What This Does
The [formData] input binds userData from Angular to the web component.
The (formSubmitted) event captures the submitted form data.
#opportunityForm reference is used in ViewChild to detect changes inside the web component.


 Final Result
✅ Unsaved changes are detected when the user types in the Web Component.
✅ When navigating away, a modal appears asking for confirmation.
✅ If OK is clicked, navigation happens automatically.
✅ If Cancel is clicked, the user remains on the page.