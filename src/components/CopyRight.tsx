

export default function CopyRight(){
    const year = new Date().getFullYear();

    return (<footer className="text-center pt-5">
        Copyright © {year}, Jason Ashimine. All rights reserved.
    </footer>)
}