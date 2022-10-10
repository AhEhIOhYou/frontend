<script>
	let mCords = {x: 0, y: 0};

	const handleMousePos = (event) => {
        mCords.x = event.clientX;
        mCords.y = event.clientY;
	}
</script>

<div on:mousemove={handleMousePos}>
    Mouse position x: {mCords.x}, y: {mCords.y}
</div>