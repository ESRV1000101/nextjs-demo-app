(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/tienda/[category]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CategoryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Mock product data for each category
const productData = {
    'cebolla-tomate-ajo': [
        {
            id: 'cebolla-1',
            name: 'Cebolla Roja',
            price: 3.50,
            description: 'Cebolla roja fresca por kg'
        },
        {
            id: 'tomate-1',
            name: 'Tomate Italiano',
            price: 4.20,
            description: 'Tomate italiano maduro por kg'
        },
        {
            id: 'ajo-1',
            name: 'Ajo Nacional',
            price: 12.00,
            description: 'Ajo peruano de primera calidad por kg'
        },
        {
            id: 'aji-1',
            name: 'Ají Amarillo',
            price: 8.50,
            description: 'Ají amarillo fresco por kg'
        },
        {
            id: 'limon-1',
            name: 'Limón Sutil',
            price: 2.80,
            description: 'Limón sutil jugoso por kg'
        },
        {
            id: 'palta-1',
            name: 'Palta Hass',
            price: 6.90,
            description: 'Palta Hass cremosa por kg'
        }
    ],
    'papa-camote-tuberculos': [
        {
            id: 'papa-1',
            name: 'Papa Blanca',
            price: 2.50,
            description: 'Papa blanca para cocinar por kg'
        },
        {
            id: 'papa-2',
            name: 'Papa Amarilla',
            price: 3.20,
            description: 'Papa amarilla peruanita por kg'
        },
        {
            id: 'camote-1',
            name: 'Camote Morado',
            price: 3.80,
            description: 'Camote morado dulce por kg'
        },
        {
            id: 'yuca-1',
            name: 'Yuca Fresca',
            price: 2.90,
            description: 'Yuca fresca pelada por kg'
        }
    ],
    'espinacas-lechugas-hierbas': [
        {
            id: 'espinaca-1',
            name: 'Espinaca Fresca',
            price: 4.50,
            description: 'Espinaca fresca en atado'
        },
        {
            id: 'lechuga-1',
            name: 'Lechuga Americana',
            price: 3.20,
            description: 'Lechuga americana crocante por unidad'
        },
        {
            id: 'perejil-1',
            name: 'Perejil',
            price: 1.50,
            description: 'Perejil fresco en atado'
        },
        {
            id: 'cilantro-1',
            name: 'Cilantro',
            price: 1.50,
            description: 'Cilantro fresco en atado'
        }
    ],
    'arverjitas-vainitas-legumbres': [
        {
            id: 'arveja-1',
            name: 'Arverjitas Frescas',
            price: 5.20,
            description: 'Arverjitas tiernas por kg'
        },
        {
            id: 'vainita-1',
            name: 'Vainitas',
            price: 4.80,
            description: 'Vainitas frescas por kg'
        },
        {
            id: 'haba-1',
            name: 'Habas Verdes',
            price: 6.50,
            description: 'Habas verdes tiernas por kg'
        }
    ],
    'choclo-zanahoria-pepinos': [
        {
            id: 'choclo-1',
            name: 'Choclo Tierno',
            price: 1.80,
            description: 'Choclo tierno por unidad'
        },
        {
            id: 'zanahoria-1',
            name: 'Zanahoria',
            price: 3.50,
            description: 'Zanahoria fresca por kg'
        },
        {
            id: 'pepino-1',
            name: 'Pepino',
            price: 2.90,
            description: 'Pepino fresco por kg'
        },
        {
            id: 'beterraga-1',
            name: 'Beterraga',
            price: 3.80,
            description: 'Beterraga fresca por kg'
        }
    ],
    'apio-pimientos': [
        {
            id: 'apio-1',
            name: 'Apio Fresco',
            price: 2.50,
            description: 'Apio fresco por atado'
        },
        {
            id: 'pimiento-1',
            name: 'Pimiento Rojo',
            price: 7.20,
            description: 'Pimiento rojo dulce por kg'
        },
        {
            id: 'pimiento-2',
            name: 'Pimiento Verde',
            price: 6.80,
            description: 'Pimiento verde por kg'
        }
    ],
    'brocoli-col-coliflor': [
        {
            id: 'brocoli-1',
            name: 'Brócoli Fresco',
            price: 5.50,
            description: 'Brócoli fresco por unidad'
        },
        {
            id: 'coliflor-1',
            name: 'Coliflor',
            price: 4.20,
            description: 'Coliflor blanca por unidad'
        },
        {
            id: 'col-1',
            name: 'Col Verde',
            price: 3.80,
            description: 'Col verde fresca por kg'
        },
        {
            id: 'alcachofa-1',
            name: 'Alcachofa',
            price: 8.50,
            description: 'Alcachofa fresca por unidad'
        }
    ],
    'berenjenas-caiguas': [
        {
            id: 'berenjena-1',
            name: 'Berenjena',
            price: 4.50,
            description: 'Berenjena fresca por kg'
        },
        {
            id: 'caigua-1',
            name: 'Caigua',
            price: 3.20,
            description: 'Caigua fresca por kg'
        }
    ],
    'verduras-orientales': [
        {
            id: 'col-china-1',
            name: 'Col China',
            price: 4.80,
            description: 'Col china fresca por kg'
        },
        {
            id: 'kion-1',
            name: 'Kion',
            price: 15.00,
            description: 'Kion fresco por kg'
        },
        {
            id: 'sillao-1',
            name: 'Cebolla China',
            price: 2.50,
            description: 'Cebolla china en atado'
        }
    ],
    'frutas': [
        {
            id: 'manzana-1',
            name: 'Manzana Roja',
            price: 5.50,
            description: 'Manzana roja deliciosa por kg'
        },
        {
            id: 'platano-1',
            name: 'Plátano de Seda',
            price: 3.20,
            description: 'Plátano de seda maduro por kg'
        },
        {
            id: 'naranja-1',
            name: 'Naranja Jugosa',
            price: 2.80,
            description: 'Naranja para jugo por kg'
        },
        {
            id: 'mandarina-1',
            name: 'Mandarina',
            price: 4.50,
            description: 'Mandarina dulce por kg'
        },
        {
            id: 'uva-1',
            name: 'Uva Red Globe',
            price: 8.90,
            description: 'Uva red globe sin pepa por kg'
        },
        {
            id: 'pera-1',
            name: 'Pera',
            price: 6.20,
            description: 'Pera jugosa por kg'
        }
    ],
    'aceitunas-huevos': [
        {
            id: 'aceituna-1',
            name: 'Aceitunas Verdes',
            price: 12.50,
            description: 'Aceitunas verdes por kg'
        },
        {
            id: 'aceituna-2',
            name: 'Aceitunas Negras',
            price: 14.00,
            description: 'Aceitunas negras por kg'
        },
        {
            id: 'huevo-1',
            name: 'Huevos Pardos',
            price: 0.60,
            description: 'Huevos pardos por unidad'
        }
    ]
};
const categoryNames = {
    'cebolla-tomate-ajo': 'Cebolla, tomate, ajo, ajíes, limón, palta',
    'papa-camote-tuberculos': 'Papa, camote, otros tubérculos',
    'espinacas-lechugas-hierbas': 'Espinacas, lechugas y hierbas',
    'arverjitas-vainitas-legumbres': 'Arverjitas, vainitas, habas y otras legumbres',
    'choclo-zanahoria-pepinos': 'Choclo, zanahoria, pepinos y beterragas',
    'apio-pimientos': 'Apio y pimientos',
    'brocoli-col-coliflor': 'Brócoli, col, coliflor y alcachofas',
    'berenjenas-caiguas': 'Berenjenas y caiguas',
    'verduras-orientales': 'Verduras orientales',
    'frutas': 'Frutas',
    'aceitunas-huevos': 'Aceitunas y Huevos pardos'
};
function CategoryPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const category = params.category;
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [addedItems, setAddedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const products = productData[category] || [];
    const categoryName = categoryNames[category] || 'Categoría';
    const handleQuantityChange = (productId, quantity)=>{
        setQuantities((prev)=>({
                ...prev,
                [productId]: quantity
            }));
    };
    const handleAddToCart = (product)=>{
        const quantity = quantities[product.id] || 1;
        try {
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                category: categoryName
            }, quantity);
            setAddedItems((prev)=>({
                    ...prev,
                    [product.id]: true
                }));
            // Reset the added state after 2 seconds
            setTimeout(()=>{
                setAddedItems((prev)=>({
                        ...prev,
                        [product.id]: false
                    }));
            }, 2000);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };
    if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 mb-4",
                            children: categoryName
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[category]/page.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600",
                            children: "No hay productos disponibles en esta categoría por el momento."
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[category]/page.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/tienda/[category]/page.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/tienda/[category]/page.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/tienda/[category]/page.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: categoryName
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[category]/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600",
                            children: "Productos frescos y de calidad seleccionados especialmente para ti"
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[category]/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/tienda/[category]/page.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                    children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-gray-900 mb-2",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-4 text-sm",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: `quantity-${product.id}`,
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Cantidad:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: `quantity-${product.id}`,
                                                        value: quantities[product.id] || 1,
                                                        onChange: (e)=>handleQuantityChange(product.id, parseInt(e.target.value)),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
                                                        children: [
                                                            1,
                                                            2,
                                                            3,
                                                            4,
                                                            5,
                                                            6,
                                                            7,
                                                            8,
                                                            9,
                                                            10
                                                        ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: num,
                                                                children: num
                                                            }, num, false, {
                                                                fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleAddToCart(product),
                                                disabled: addedItems[product.id],
                                                className: `w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${addedItems[product.id] ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`,
                                                children: addedItems[product.id] ? '¡Agregado!' : 'Agregar al Carrito'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tienda/[category]/page.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/src/app/tienda/[category]/page.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/tienda/[category]/page.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/tienda/[category]/page.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/tienda/[category]/page.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(CategoryPage, "+d2J+yImUurPFRaScC62tSNr70Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CategoryPage;
var _c;
__turbopack_context__.k.register(_c, "CategoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_126c0166._.js.map