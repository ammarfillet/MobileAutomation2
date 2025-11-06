describe('App > Alert Dialogs > Text Entry dialog', () => {
    it('should open API Demos and fill name & password', async () => {
        await driver.pause(3000);

        const apiDemosIcon = await $('//android.widget.TextView[@text="API Demos"]');
        await apiDemosIcon.waitForDisplayed({ timeout: 10000 });
        await apiDemosIcon.click();

        await driver.pause(2000);

        const appMenu = await $('//android.widget.TextView[@text="App"]');
        await appMenu.waitForDisplayed({ timeout: 10000 });
        await appMenu.click();

        const alertDialogs = await $('//android.widget.TextView[@text="Alert Dialogs"]');
        await alertDialogs.waitForDisplayed({ timeout: 10000 });
        await alertDialogs.click();

        const textEntry = await $('//android.widget.Button[@text="Text Entry dialog"]');
        await textEntry.waitForDisplayed({ timeout: 10000 });
        await textEntry.click();

        const nameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        const passwordField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');

        await nameField.setValue('Ammar Rasyadan');
        await passwordField.setValue('123456');

        const okButton = await $('//android.widget.Button[@text="OK"]');
        await okButton.click();

        console.log('✅ Test selesai - Name & Password berhasil diisi!');
        await driver.pause(1000);
    });
});
