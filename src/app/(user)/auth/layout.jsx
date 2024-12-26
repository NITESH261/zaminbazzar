
const AuthLayout = ({ children }) => {
    return (
        <div className="flex w-full h-full">
            <div className="flex w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                    <div className="flex flex-col items-center justify-center w-full">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Data to enrich your online business
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                        </p>
                    </div>
                    <div className="flex w-full items-center justify-center md:justify-end">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
