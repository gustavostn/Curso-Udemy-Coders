function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido, area = ${area}m²`);
    } else {
        return area
    }
}
area(5, 5)