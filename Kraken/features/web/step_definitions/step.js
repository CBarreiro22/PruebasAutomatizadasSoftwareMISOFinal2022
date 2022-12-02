const {Login} = require('./pages_object/login.js');
const {UserData} = require('./pages_object/userData');

const { Given, When, Then } = require('@cucumber/cucumber');
const loginFrm= new Login("Incio");
const userData = new UserData();

When('I enter email', async function () {
    ///html/body/div[2]/div/main/div/div/section/form/div[1]/span/input
    let element = await this.driver.$(loginFrm.txtEmail);
    return await element.setValue(userData.emailAdmin);
});
When('I enter password', async function () {
    let element = await this.driver.$(loginFrm.txtPassword);
    return await element.setValue(userData.passwordAdmin);
});
When('I click next', async function() {
    let element = await this.driver.$('.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    return await element.click();
})

When('I enter email nuevo {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.email.ember-text-field.gh-input.ember-view');
    return await element.setValue(writepage);
});

When('I enter password nuevo {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.password.ember-text-field.gh-input.ember-view');
    return await element.setValue(writepage);
});


When('I click pages', async function() {
    let element = await this.driver.$('#ember33');
    return await element.click();
})

When('I click New page', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
    return await element.click();
})

When('I enter page {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(writepage);
});

When('I enter contenido pagina {kraken-string}', async function (writecontenido) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    return await element.setValue(writecontenido);
});

When('I click Salir page', async function() {
    let element = await this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button');
    return await element.click();
})

When('I click Posts', async function() {
    let element = await this.driver.$('.ember-view.gh-secondary-action.gh-nav-new-post');
    return await element.click();
})


When('I enter new post {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(writepage);
});

When('I enter a subtitle {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    return await element.setValue(writepage);
});

When('I click Post back', async function() {
    let element = await this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button');
    return await element.click();
})

When('I click on mobile content', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-group-selected.gh-post-preview-mode');
    return await element.click();
})

When('I click on preview', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-editor.gh-editor-preview-trigger');
    return await element.click();
})
 
When('I click edit post', async function() {
    let element = await this.driver.$('.ember-view.gh-post-list-cta.edit');
    return await element.click();
})

When('I edit post {kraken-string}', async function(writepage) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(writepage)
})

When('I click tag', async function() {
    let element = await this.driver.$('#ember34');
    return await element.click();
})

When('I click new tag', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary');
    return await element.click();
})

When('I enter name tag {kraken-string}', async function(writepage) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(writepage)
})

When('I enter slug {kraken-string}', async function(writepage) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(writepage)
})

When('I enter description tag {kraken-string}', async function(writepage) {
    let element = await this.driver.$('.gh-input.gh-tag-details-textarea');
    return await element.setValue(writepage)
})

When('I click imagen tag', async function() {
    let element = await this.driver.$('.gh-image-uploader-unsplash');
    return await element.click();
})


When('I click imagen tag seleccionada', async function() {
    let element = await this.driver.$('.gh-unsplash-button');
    return await element.click();
})

When('I click save tag', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary');
    return await element.click();
})

When('I click miembro', async function() {
    let element = await this.driver.$('#ember35');
    return await element.click();
})


When('I click añadirse a uno mismo', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-green');
    return await element.click();
})

When('I click miembro nuevo', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary');
    return await element.click();
})

When('I click guardar miembro', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
})


When('I enter name miembro {kraken-string}', async function(writepage) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(writepage)
})

When('I enter email miembro {kraken-string}', async function(writepage) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(writepage)
})

