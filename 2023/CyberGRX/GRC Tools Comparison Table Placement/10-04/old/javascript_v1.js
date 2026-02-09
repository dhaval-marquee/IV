function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('redesign_table')) {
        bodyEle.classList.add('redesign_table');
        
        // Put your test code here
        document.querySelectorAll('.redesign_table h1')[0].nextElementSibling.remove();
        document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.previousElementSibling.style.display = "none";

        document.querySelectorAll('.redesign_table h1')[0].textContent = 'Functional Comparison of CyberGRX and GRC Tools';
        document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling.textContent = "Don't Take Our Word For It, Compare For Yourself";
        document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling.nextElementSibling.classList.add('hasCTA');
        document.querySelectorAll('.hasCTA a')[0].classList.add('btn', 'btn-primary', 'btn-next');
        document.querySelectorAll('.hasCTA a')[0].insertAdjacentHTML('beforebegin','<br>');
        document.querySelectorAll('.hasCTA a')[0].nextSibling.remove();

        document.querySelectorAll('.redesign_table h1')[0].after(document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling.nextElementSibling);

        document.querySelectorAll('.redesign_table h1')[0].after(document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling);

        // document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.style.display = 'none';

        
        document.querySelectorAll('.redesign_table h1')[0].insertAdjacentHTML('afterend',`<table class="cybergrx_table" cellspacing="0">
            <thead class="text-center">
                <tr>
                    <th width="50%"></th>
                    <th width="25%">CyberGRX</th>
                    <th width="25%">GRC Tools <em>Examples: Archer Suite (RSA), IBM Open Pages, Metric Stream, ServiceNow</em></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A dynamic Exchange, with information shared between customer and third party</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Predictive insights, on how a vendor is likely to answer assessment questions</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Portfolio-wide view of risk surface</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Portfolio-wide risk management</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                </tr>
                <tr>
                    <td>Mineable, structured data for analysis</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Ability to produce continuous, real-time results</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Ability to manage risk domains outside of security, privacy, and business continuity</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                </tr>
                <tr>
                    <td>Advanced kill chain analytics based on machine learning</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Custom and standard Framework Mapping</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Threat modeling tools</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
                <tr>
                    <td>Automated risk ranking and remediation prioritization</td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/true.png" alt="true"></td>
                    <td><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1680944268/CyberGRX/GRC-Tools-Comparison-Table-Placement/false.png" alt="false"> </td>
                </tr>
            </tbody>
            <tfoot>
                <td></td>
                <td></td>
                <td></td>
            </tfoot>
        </table>`);
        
    }
}
loadTestCode();