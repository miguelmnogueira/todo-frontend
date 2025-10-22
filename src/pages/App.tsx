import FlowContainer from "@/components/flow-container";
import { useSession } from "@/providers/session";
import { useEffect } from "react";

const App = () => {
	const { setSession } = useSession();
	useEffect(() => {
		setSession(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
		);
	}, []);

	return (
		<div className="min-h-screen w-full font-geist">
			{/* <div className=" inset-0 bg-background">
				<div className="absolute inset-0 bg-[radial-gradient(#dddddd_1px,transparent_1px)] dark:bg-[radial-gradient(#1d1d1d_1px,transparent_1px)] bg-size-[30px_30px]" />
			</div> */}
			<FlowContainer />
		</div>
	);
};

export default App;
