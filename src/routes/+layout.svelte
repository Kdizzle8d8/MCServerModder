<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<div class="flex h-screen w-screen overflow-hidden">
	<div class="bg-card sticky top-0 h-screen w-20 overflow-y-auto rounded-lg">
		<!-- Sidebar content goes here -->
	</div>
	<div class="flex-1 overflow-y-auto">
		<slot></slot>
	</div>
</div>
