"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edit = Edit;
/**
 * External dependencies
 */
const block_templates_1 = require("@woocommerce/block-templates");
const compose_1 = require("@wordpress/compose");
const components_1 = require("@woocommerce/components");
const element_1 = require("@wordpress/element");
const i18n_1 = require("@wordpress/i18n");
const icons_1 = require("@wordpress/icons");
/**
 * Internal dependencies
 */
const text_control_1 = require("../../../components/text-control");
const validation_context_1 = require("../../../contexts/validation-context");
const use_product_edits_1 = require("../../../hooks/use-product-edits");
const use_product_entity_prop_1 = __importDefault(require("../../../hooks/use-product-entity-prop"));
function Edit({ attributes, context: { postType }, }) {
    const blockProps = (0, block_templates_1.useWooBlockProps)(attributes);
    const { property, label, placeholder, required, pattern, minLength, maxLength, min, max, help, tooltip, disabled, type, suffix, } = attributes;
    const [value, setValue] = (0, use_product_entity_prop_1.default)(property, {
        postType,
        fallbackValue: '',
    });
    const { hasEdit } = (0, use_product_edits_1.useProductEdits)();
    const inputRef = (0, element_1.useRef)(null);
    const { error, validate, ref: inputValidatorRef, } = (0, validation_context_1.useValidation)(property, async function validator() {
        if (!inputRef.current)
            return;
        const input = inputRef.current;
        let customErrorMessage = '';
        if (input.validity.typeMismatch) {
            customErrorMessage =
                type?.message ??
                    (0, i18n_1.__)('Invalid value for the field.', 'woocommerce');
        }
        if (input.validity.valueMissing) {
            customErrorMessage =
                typeof required === 'string'
                    ? required
                    : (0, i18n_1.__)('This field is required.', 'woocommerce');
        }
        if (input.validity.patternMismatch) {
            customErrorMessage =
                pattern?.message ??
                    (0, i18n_1.__)('Invalid value for the field.', 'woocommerce');
        }
        if (input.validity.tooShort) {
            // eslint-disable-next-line @wordpress/valid-sprintf
            customErrorMessage = (0, i18n_1.sprintf)(minLength?.message ??
                /* translators: %d: minimum length */
                (0, i18n_1.__)('The minimum length of the field is %d', 'woocommerce'), minLength?.value);
        }
        if (input.validity.tooLong) {
            // eslint-disable-next-line @wordpress/valid-sprintf
            customErrorMessage = (0, i18n_1.sprintf)(maxLength?.message ??
                /* translators: %d: maximum length */
                (0, i18n_1.__)('The maximum length of the field is %d', 'woocommerce'), maxLength?.value);
        }
        if (input.validity.rangeUnderflow) {
            // eslint-disable-next-line @wordpress/valid-sprintf
            customErrorMessage = (0, i18n_1.sprintf)(min?.message ??
                /* translators: %d: minimum length */
                (0, i18n_1.__)('The minimum value of the field is %d', 'woocommerce'), min?.value);
        }
        if (input.validity.rangeOverflow) {
            // eslint-disable-next-line @wordpress/valid-sprintf
            customErrorMessage = (0, i18n_1.sprintf)(max?.message ??
                /* translators: %d: maximum length */
                (0, i18n_1.__)('The maximum value of the field is %d', 'woocommerce'), max?.value);
        }
        input.setCustomValidity(customErrorMessage);
        if (!input.validity.valid) {
            return {
                message: customErrorMessage,
            };
        }
    }, [type, required, pattern, minLength, maxLength, min, max, value]);
    function getSuffix() {
        if (!suffix || !value || !inputRef.current)
            return;
        const isValidUrl = inputRef.current.type === 'url' &&
            !inputRef.current.validity.typeMismatch;
        if (suffix === true && isValidUrl) {
            return ((0, element_1.createElement)(components_1.Link, { type: "external", href: value, target: "_blank", rel: "noreferrer", className: "wp-block-woocommerce-product-text-field__suffix-link" },
                (0, element_1.createElement)(icons_1.Icon, { icon: icons_1.external, size: 20 })));
        }
        return typeof suffix === 'string' ? suffix : undefined;
    }
    return ((0, element_1.createElement)("div", { ...blockProps },
        (0, element_1.createElement)(text_control_1.TextControl, { ref: (0, compose_1.useMergeRefs)([inputRef, inputValidatorRef]), type: type?.value ?? 'text', value: value, disabled: disabled, label: label, onChange: setValue, onBlur: () => {
                if (hasEdit(property)) {
                    validate();
                }
            }, error: error, help: help, placeholder: placeholder, tooltip: tooltip, suffix: getSuffix(), required: Boolean(required), pattern: pattern?.value, minLength: minLength?.value, maxLength: maxLength?.value, min: min?.value, max: max?.value })));
}
