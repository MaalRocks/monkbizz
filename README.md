> # Fetch shit
>
> ```
> try {
> ```

    		await fetch(`/api/users/${userID}`, {
    			method: "Delete",
    		})
    		router.push("/")
    	} catch (error) {
    		setMessage("Failed to delete the user.")
    	}
    ```
