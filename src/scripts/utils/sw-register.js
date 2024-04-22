import {Workbox} from 'workbox-window';

const swRegister = async () => {
	if (!('serviceWorker' in navigator)) {
		console.log('Service worker is not supported by this browser');
		return;
	}

	// Making Workbox Instance with WorkboxWindow
	const wb = new Workbox('./sw.bundle.js');

	try {
		// Register the service worker
		await wb.register();
		console.log('Service worker is registered');
	} catch (error) {
		console.error('Service worker registration failed:', error);
	}
};

export default swRegister;
